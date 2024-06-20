export class TodoPage {
  navigateToHome() {
    cy.visit('https://example.cypress.io/todo');
  }

  validateTodoCount(expectedLength) {
    if (expectedLength > 0) {
      cy.get('.todo-list li').should('have.length', expectedLength);
    } else {
      cy.get('.todo-list li').should('not.exist');
    }
  }

  validateTodoText(toDoIndex, expectedTodoText) {
    cy.get('.todo-list li')
      .eq(toDoIndex - 1)
      .should('have.text', expectedTodoText);
  }

  addTodo(newTodoText) {
    cy.get('[data-test=new-todo]').type(`${newTodoText}{enter}`);
  }

  checkTodo(todoText) {
    cy.contains(todoText).parent().find('input[type=checkbox]').check();
  }

  verifyTodoIsChecked(todoText) {
    cy.contains(todoText).should('have.css', 'text-decoration').and('match', /line-through/);
  }

  clickAnchorByText(anchorText) {
    cy.get(`a:contains("${anchorText}")`).should('have.length', 1).click();
  }

  clickButtonByText(buttonText) {
    cy.get(`button:contains("${buttonText}")`).should('have.length', 1).click();
  }

  verifyTextExistence(text, doesExist = true) {
    if (doesExist) {
      cy.contains(text).should('exist');
    } else {
      cy.contains(text).should('not.exist');
    }
  }

  hoverTodo(todoText) {
    const el = cy.contains(todoText).parent();
    el.realHover();
  }

  verifyRemoveButtonIsVisible(todoText) {
    cy.contains(todoText)
      .parent()
      .find('.destroy.todo-button')
      .should('be.visible');
  }

  removeTodo(todoText) {
    cy.contains(todoText)
      .parent()
      .find('.destroy.todo-button')
      .invoke('show')
      .click();
  }
}
