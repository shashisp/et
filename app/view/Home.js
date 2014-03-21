Ext.define('Sencha.view.Home', {
    extend: 'Ext.form.FormPanel',
    xtype: 'homecard',
    requires: [
        'Ext.form.FieldSet',
        
    ],
    config: {
        iconCls: 'home',
        title: 'Home',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Easy Treaty'
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
                        label: 'Disease'
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


