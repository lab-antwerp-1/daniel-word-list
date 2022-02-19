<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Development strategy

This site will be developed through the following issues:

## Must haves

1- Header:

- As a user I can see a big header that indicates the purpose of the site.
  - [ ] _there is a header a header with the name of the page that indicates its purpose at the same time.

**Issues:**

 `1- HTML:`

- [ ] Use `h1` to set the header.

`2- CSS:`

- [ ] Use `align-items: center` to center the text.

---

2- Adding new item:

- As a user I can create lists of items.
  - [ ] _there is a text box to type in each new element_
  - [ ] _there is a button to add each new element from the text box to the list_

**Issues:**

`1- HTML:`

- [ ] Use `input` with type `text` to create the text box.
- [ ] Assign and ID accordingly.
- [ ] Use `placeholder` attribute to set the `Enter an item` message.
- [ ] Use `button` to create the button that will send the input to the list.
- [ ] Assign an ID accordingly.

`2- CSS:`

- [ ] Use a `div` to create a `container` and place the elements.

`3- JS: Components`

- [ ] Use `form` to put all inputs together.
- [ ] Use `input type = button` to add the button.
- [ ] Use `value` to set it to `add`.
- [ ] Use `input name = text` and `placeholder = new word` for text box.

`4- JS: Logic`

- [ ] Use `isWord` function to make sure is a word.

`5- JS: Handlers`

- [ ] Use `handleInputWord` handler to add the item to the list.

---

3- Removing items:

- As a user I can remove items from the list.
  - [ ] _there is button that allows the user to remove a preexisting item in the list_

**Issues:**

`1- HTML:`

- [ ] Use `button` to create the element.
- [ ] Use the attribute `value` and set it to `Remove`.
- [ ] Assign an ID accordingly.

`2- CSS:`

- Use default properties.

`3- JS: Components`

`4- JS: Logic`

`5- JS: Handlers`

---

3- Displaying list:

- As a user I can see the list with all items.
  - [ ] _the current list is displayed with all current stored items_

**Issues:**

`1- HTML:`

- [ ] Use `ul` to contain all items.
- [ ] Assign an ID accordingly.
- [ ] Use `li` to display each item into the list.

`2- CSS:`

- [ ] Use `border` to create a box that will contain all items and apply it to the `ul` element.

`3- JS: Components`

`4- JS: Logic`

`5- JS: Handlers`

---

4- Sorting the elements:

- As a user I can sort the items in the list by length, alphabetical order or age (newest to oldest or vice versa).
  - [ ] _there is a dropdown with all the different display options_

**Issues:**

`1- HTML:`

- [ ] Use `select` and `option` to create a dropdown menu.
- [ ] Assign ID accordingly.

`2- CSS:`

- Use default values.

`3- JS: Components`

`4- JS: Logic`

`5- JS: Handlers`
