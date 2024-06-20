import { TodoPage } from "../todo-objects"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const todoPage = new TodoPage()

Given('I open the to-do page', () => {
  todoPage.navigateToHome();
})

Then('I see {int} to-do items displayed', (expectedCount) => {
  todoPage.validateTodoCount(expectedCount)
})

And('to-do item {int} is {string}', (index, expectedText) => {
  todoPage.validateTodoText(index, expectedText)
})

When('I add to-do item {string}', (newItemText) => {
  todoPage.addTodo(newItemText)
})

When('I hover to-do item {string}', (itemText) => {
  todoPage.hoverTodo(itemText)
})


Then('destroy button of item {string} is visible', (itemText) => {
  todoPage.verifyDestroyButtonIsVisible(itemText)
})

When('I press destroy button of to-do item {string}', (itemText) => {
  todoPage.removeTodo(itemText)
})

Then('to-do item {string} is removed', (itemText) => {
  todoPage.verifyItemIsRemoved(itemText)
})

// When('I mark to-do item {string} as complete', (itemToCheck) => {
//   todoPage.checkTodo(itemToCheck)
// })

// Then('to-do item {string} is checked', (expectedItemToBeChecked) => {
//   todoPage.verifyTodoIsChecked(expectedItemToBeChecked)
// })

// When('I click the {string} link', (linkTextToClick) => {
//   todoPage.clickAnchorByText(linkTextToClick)
// })

// When('I click the {string} button', (buttonTextToClick) => {
//   todoPage.clickButtonByText(buttonTextToClick)
// })

// Then('to-do item {string} is not displayed', (itemText) => {
//   todoPage.verifyTextExistence(itemText, false)
// })