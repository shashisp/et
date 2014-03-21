Ext.define('Sencha.view.Search', {
    extend: 'Ext.form.FormPanel',
     xtype: 'searchcard',
    requires: [
        'Ext.form.FieldSet',
        
    ],
   

    config: {
        iconCls: 'search',
        title: 'Blood Search',
        items: [
            {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Blood Search'
          },
            {
                xtype: 'fieldset',
                title: 'Enter your Location',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        label: 'Location'
                    },{
                        xtype: 'textfield',
                        name : 'disease',
                        label: 'Blood Group'
                    }
                ],
            },{
                xtype:  'button',
                text:   'Search',
                ui:     'confirm'
            }
        ]
    }
});




    