using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Windows.Data.Json;
using Windows.Storage;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Media.Imaging;

// Das von dieser Datei definierte Datenmodell dient als repräsentatives Beispiel für ein Modell
// unterstützt.  Die gewählten Eigenschaftennamen stimmen mit Datenbindungen in den Standardelementvorlagen überein.
//
// Anwendungen können dieses Modell als Startpunkt verwenden und darauf aufbauen. Es kann jedoch auch komplett verworfen und
// durch ein anderes den Anforderungen entsprechendes Modell ersetzt werden Bei Verwendung dieses Modells verbessern Sie möglicherweise 
// Reaktionsfähigkeit durch Initiieren der Datenladeaufgabe im hinteren Code für App.xaml, wenn die App 
// zuerst gestartet wird.

namespace Lebenshilfe_02.Data
{
    public class StandortAuswahlDataItem
    {
        public StandortAuswahlDataItem(String uniqueId, String title)
        {
            this.UniqueId = uniqueId;
            this.Title = title;
        }

        public string UniqueId { get; private set; }
        public string Title { get; private set; }

        public override string ToString()
        {
            return this.Title;
        }
    }

    /// <summary>
    /// Generisches Gruppendatenmodell
    /// </summary>
    public class StandortAuswahlDataGroup
    {
        public StandortAuswahlDataGroup(String uniqueId)
        {
            this.UniqueId = uniqueId;
            this.Items = new ObservableCollection<StandortAuswahlDataItem>();
        }

        public string UniqueId { get; private set; }
        public ObservableCollection<StandortAuswahlDataItem> Items { get; private set; }

    }

    /// <summary>
    /// Erstellt eine Auflistung von Gruppen und Elementen mit Inhalten, die aus einer statischen JSON-Datei gelesen werden.
    /// 
    /// SampleDataSource wird mit Daten initialisiert, die aus einer statischen JSON-Datei gelesen werden, die 
    /// Projekt.  Dadurch werden Beispieldaten zur Entwurfszeit und zur Laufzeit bereitgestellt.
    /// </summary>
    public sealed class StandortAuswahlDataSource
    {
        private static StandortAuswahlDataSource _standortDataSource = new StandortAuswahlDataSource();

        private ObservableCollection<StandortAuswahlDataGroup> _standorte = new ObservableCollection<StandortAuswahlDataGroup>();
        public ObservableCollection<StandortAuswahlDataGroup> Groups
        {
            get { return this._standorte; }
        }

        public static async Task<IEnumerable<StandortAuswahlDataGroup>> GetGroupsAsync()
        {
            await _standortDataSource.GetStandorteDataAsync();

            return _standortDataSource.Groups;
        }

        public static async Task<StandortAuswahlDataGroup> GetStandortAsync(string uniqueId)
        {
            await _standortDataSource.GetStandorteDataAsync();
            // Einfache lineare Suche ist bei kleinen DataSets akzeptabel.
            var matches = _standortDataSource.Groups.Where((group) => group.UniqueId.Equals(uniqueId));
            if (matches.Count() == 1) return matches.First();
            return null;
        }

        //public static async Task<StandortDataItem> GetItemAsync(string uniqueId)
        //{
        //    await _standortDataSource.GetSampleDataAsync();
        //    // Einfache lineare Suche ist bei kleinen DataSets akzeptabel.
        //    var matches = _standortDataSource.Standorte.SelectMany(group => group.Items).Where((item) => item.UniqueId.Equals(uniqueId));
        //    if (matches.Count() == 1) return matches.First();
        //    return null;
        //}

        private async Task GetStandorteDataAsync()
        {
            if (this._standorte.Count != 0)
                return;

            Uri dataUri = new Uri("ms-appx:///DataModel/StandortAuswahlData.json");

            StorageFile file = await StorageFile.GetFileFromApplicationUriAsync(dataUri);
            string jsonText = await FileIO.ReadTextAsync(file);
            JsonObject jsonObject = JsonObject.Parse(jsonText);
            JsonArray jsonArray = jsonObject["Groups"].GetArray();

            foreach (JsonValue groupValue in jsonArray)
            {
                JsonObject groupObject = groupValue.GetObject();
                StandortAuswahlDataGroup group = new StandortAuswahlDataGroup(groupObject["UniqueId"].GetString());

                foreach (JsonValue itemValue in groupObject["Items"].GetArray())
                {
                    JsonObject itemObject = itemValue.GetObject();
                    group.Items.Add(new StandortAuswahlDataItem(itemObject["UniqueId"].GetString(),
                                                       itemObject["Title"].GetString()));
                }
                this.Groups.Add(group);
            }
        }
    }
    }