define(
    'model',
    [],
    function () {
        
           
        
        return {
            model: function (data) {
                var self = this;

                self.data = data;

                self.addItem = function (item) {
                    if(item.length === 0) {
                        return;
                    }

                    self.data.push(item);

                    return self.data;
                };

                self.removeItem = function (item) {
                    var index = self.data.indexOf(item);

                    if(index === -1) {
                        return;
                    }
                    
                    self.data.splice(index, 1);
                    return self.data;
                };
                
                
                self.editItem = function(item, index) {
                    if(item == 'input')	{return false;}
                    var val = item.html();
                    var index = self.data.indexOf(index);
                    
                    if(index === -1) {
                        return;
                    }
                    
                    var code = '<input type="text" id="edit" value="'+val+'" />';
                    item.empty().append(code);
                    $('#edit').focus();
                    $('#edit').blur(function()	{
                        var val = $(this).val();
                        $(this).parent().empty().html(val);
                        self.data.splice(index, 1, val);
                        return self.data;
                    });
                };
            }
        };
    }
);