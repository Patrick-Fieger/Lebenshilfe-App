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
    public class GruppeDataItem
    {
        public GruppeDataItem(String uniqueId, String title)
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

        //public override string ToString()
        //{
        //    return this.Nachname;
        //}
    }

    /// <summary>
    /// Generisches Gruppendatenmodell
    /// </summary>
    public class GruppeDataGroup
    {
        public GruppeDataGroup(String uniqueId)
        {
            this.UniqueId = uniqueId;
            this.Items = new ObservableCollection<GruppeDataItem>();
        }

        public string UniqueId { get; private set; }
        public ObservableCollection<GruppeDataItem> Items { get; private set; }

    }

    /// <summary>
    /// Erstellt eine Auflistung von Gruppen und Elementen mit Inhalten, die aus einer statischen JSON-Datei gelesen werden.
    /// 
    /// SampleDataSource wird mit Daten initialisiert, die aus einer statischen JSON-Datei gelesen werden, die 
    /// Projekt.  Dadurch werden Beispieldaten zur Entwurfszeit und zur Laufzeit bereitgestellt.
    /// </summary>
    public sealed class GruppeDataSource
    {
        private static GruppeDataSource _gruppeDataSource = new GruppeDataSource();

        private ObservableCollection<GruppeDataGroup> _gruppen = new ObservableCollection<GruppeDataGroup>();
        public ObservableCollection<GruppeDataGroup> Groups
        {
            get { return this._gruppen; }
        }

        public static async Task<IEnumerable<GruppeDataGroup>> GetGruppenAsync()
        {
            await _gruppeDataSource.GetGruppenDataAsync();

            return _gruppeDataSource.Groups;
        }

        public static async Task<GruppeDataGroup> GetGruppeAsync(string uniqueId)
        {
            await _gruppeDataSource.GetGruppenDataAsync();
            // Einfache lineare Suche ist bei kleinen DataSets akzeptabel.
            var matches = _gruppeDataSource.Groups.Where((group) => group.UniqueId.Equals(uniqueId));
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

        private async Task GetGruppenDataAsync()
        {
            if (this._gruppen.Count != 0)
                return;

            Uri dataUri = new Uri("ms-appx:///DataModel/GruppenAuswahlData.json");

            StorageFile file = await StorageFile.GetFileFromApplicationUriAsync(dataUri);
            string jsonText = await FileIO.ReadTextAsync(file);
            JsonObject jsonObject = JsonObject.Parse(jsonText);
            JsonArray jsonArray = jsonObject["Groups"].GetArray();

            foreach (JsonValue groupValue in jsonArray)
            {
                JsonObject groupObject = groupValue.GetObject();
                GruppeDataGroup group = new GruppeDataGroup(groupObject["UniqueId"].GetString());

                foreach (JsonValue itemValue in groupObject["Items"].GetArray())
                {
                    JsonObject itemObject = itemValue.GetObject();
                    group.Items.Add(new GruppeDataItem(itemObject["UniqueId"].GetString(),
                                                       itemObject["Title"].GetString()));
                }
                this.Groups.Add(group);
            }
        }
    }
    }