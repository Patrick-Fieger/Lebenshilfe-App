﻿

#pragma checksum "C:\Users\Tobi\Desktop\Microsoft\Lebenshilfe_02\Lebenshilfe_02\Lebenshilfe_02.Windows\HubPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "50A1343AD6C79C0DF25C17FF9A39D828"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Lebenshilfe_02
{
    partial class HubPage : global::Windows.UI.Xaml.Controls.Page, global::Windows.UI.Xaml.Markup.IComponentConnector
    {
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 4.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
 
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 1:
                #line 41 "..\..\HubPage.xaml"
                ((global::Windows.UI.Xaml.Controls.Hub)(target)).SectionHeaderClick += this.Hub_SectionHeaderClick;
                 #line default
                 #line hidden
                break;
            case 2:
                #line 74 "..\..\HubPage.xaml"
                ((global::Windows.UI.Xaml.Controls.ListViewBase)(target)).ItemClick += this.ItemView_ItemClick;
                 #line default
                 #line hidden
                break;
            }
            this._contentLoaded = true;
        }
    }
}


