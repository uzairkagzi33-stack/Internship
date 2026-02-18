$(document).ready(function () {
    // Load items on page load
    loadItems();

    // Form submission
    $('#item-form').submit(function (e) {
        e.preventDefault();
        const id = $('#item-id').val();
        const itemData = {
            name: $('#name').val(),
            desg: $('#desg').val(),
            water: $('#water').val()
        };

        if (id) {
            // Update existing item
            updateItem(id, itemData);
        } else {
            // Create new item
            createItem(itemData);
        }
    });

    // Cancel edit
    $('#cancel-btn').click(function () {
        resetForm();
    });

    // CRUD Functions
    function loadItems() {
        $.get('/api/items', function (data) {
            displayItems(data);
        });
    }

    function createItem(itemData) {
        $.ajax({
            url: '/api/items',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(itemData),
            success: function (newItem) {
                loadItems();
                resetForm();
            }
        });
    }

    function updateItem(id, itemData) {
        $.ajax({
            url: `/api/items/${id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(itemData),
            success: function (updatedItem) {
                loadItems();
                resetForm();
            }
        });
    }

    function deleteItem(id) {
        if (confirm('Are you sure you want to delete this item?')) {
            $.ajax({
                url: `/api/items/${id}`,
                type: 'DELETE',
                success: function () {
                    loadItems();
                }
            });
        }
    }

    function displayItems(items) {
        const container = $('#items-container');
        container.empty();
        items.forEach(item => {
            const itemDiv = $(`
                <div class="item">
                    <div class="item-info">
                        <strong>${item.name}</strong> - ${item.desg} - ${item.water}
                    </div>
                    <div class="item-buttons">
                        <button class="edit-btn" data-id="${item.id}">Edit</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `);
            container.append(itemDiv);
        });

        // Attach event listeners
        $('.edit-btn').click(function () {
            const id = $(this).data('id');
            editItem(id);
        });

        $('.delete-btn').click(function () {
            const id = $(this).data('id');
            deleteItem(id);
        });
    }

    function editItem(id) {
        $.get(`/api/items`, function (data) {
            const item = data.find(item => item.id == id);
            if (item) {
                $('#item-id').val(item.id);
                $('#name').val(item.name);
                $('#desg').val(item.desg);
                $('#water').val(item.water);
                $('#form-title').text('Edit Item');
                $('#submit-btn').text('Update Item');
                $('#cancel-btn').show();
            }
        });
    }

    function resetForm() {
        $('#item-form')[0].reset();
        $('#item-id').val('');
        $('#form-title').text('Add New Item');
        $('#submit-btn').text('Add Item');
        $('#cancel-btn').hide();
    }
});
