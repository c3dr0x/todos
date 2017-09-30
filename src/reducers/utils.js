
/**
 * Update partials keys into an item.
 * @param {object} oldItem old values.
 * @param {object} newValues new values.
 * @returns {object} merged values.
 */
export function updateObject(oldItem, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldItem, newValues);
}

/**
 * Update one item of a collection.
 * @param {array} array collection of item.
 * @param {any} itemId identifier of item to update.
 * @param {func} updateItemCallback callback to update item.
 * @returns {object} merged object into collection.
 */
export function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        if (item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }

        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });

    return updatedItems;
}