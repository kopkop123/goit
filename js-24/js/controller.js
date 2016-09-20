define(
    'controller',
    [],
    function () {
        
         
        
        return {
            controller: function (model, view) {
                var self = this;
                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.item-delete', removeItem);
                view.elements.listContainer.on('click', '.edit', editItem);
                view.elements.listContainer.on('click', '#edit', inputItem);
                view.elements.listContainer.on('keydown', '#edit', enterItem);

                function addItem() {
                    var newItem = view.elements.input.val();
                    model.addItem(newItem);
                    view.renderList(model.data);
                    view.elements.input.val('');
                }

                function removeItem() {
                    var item = $(this).attr('data-value');

                    model.removeItem(item);

                    view.renderList(model.data);
                }
                
                function editItem() {
                    var item = $(this).attr('data-edit');
                    model.editItem($(this), item);
                    
                    if($(this) == 'input')	{return false;}
//                    
//                    var val = $(this).html();
//                    $(this).addClass('ff');
//                    
//                    var code = '<input type="text" id="edit" value="'+val+'" />';
//                    console.log(val);
//                    $(this).empty().append(code);
                    
//                    $('#edit').focus();
//                    $('#edit').blur(function()	{
//                        var val = $(this).val();
//                        $(this).parent().empty().html(val);
//                    view.renderList(model.data);
//                    });
                }
                
                function inputItem() {
//                    if($(this) == 'input')	{return false;}
                    return false;
                    console.log($(this));
//                    model.removeItem(item);
//
//                    view.renderList(model.data);
                }
                
                function enterItem() {
                    if(event.keyCode == 13) {
                        $('#edit').blur();
                    }
                }

            }
        };
    }
);