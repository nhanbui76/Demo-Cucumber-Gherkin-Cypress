import { TodoPage } from "../todo-objects"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const todoPage = new TodoPage()

Given('I open the todo page', () => {
  todoPage.navigateToHome();
})

Then(/^I see (\d+) todo item(?:s)? displayed$/, (expectedCount, plural) => {
  todoPage.validateTodoCount(expectedCount)
})

And('todo item {int} is {string}', (index, expectedText) => {
  todoPage.validateTodoText(index, expectedText)
})

When('I add todo item {string}', (newItemText) => {
  todoPage.addTodo(newItemText)
})

When('I hover todo item {string}', (itemText) => {
  todoPage.hoverTodo(itemText)
})

Then('destroy button of item {string} is visible', (itemText) => {
  todoPage.verifyDestroyButtonIsVisible(itemText)
})

When('I press destroy button of todo item {string}', (itemText) => {
  todoPage.removeTodo(itemText)
})

When('I mark todo item {string} as complete', (itemToCheck) => {
  todoPage.checkTodo(itemToCheck)
})

Then('todo item {string} is checked', (expectedItemToBeChecked) => {
  todoPage.verifyTodoIsChecked(expectedItemToBeChecked)
})

When('I click the {string} link', (linkTextToClick) => {
  todoPage.clickAnchorByText(linkTextToClick)
})

When('I click the {string} button', (buttonTextToClick) => {
  todoPage.clickButtonByText(buttonTextToClick)
})

Then('todo item {string} is not displayed', (itemText) => {
  todoPage.verifyTextExistence(itemText, false)
})
