/// <reference types="Cypress" />

context('Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/login.html')
    })

    Cypress.Commands.add('login', userType => {
      const user = {
        good : {
          email: 'john@axa.fr',
          password: 'password'
        }, 
        bad : {
          email: 'bad@mail.com',
          password: 'fake'
        }
      };
      cy.get('.login__email').type(user[userType].email);
      cy.get('.login__password').type(user[userType].password);
      cy.get('.login__button').click();
    })

    it('an user should be able to login', () => {
      cy.login('good');
      cy.url().should('contain', 'app.html');
    });

    it('an user should have an error if the credentials are wrong', () => {
      cy.login('bad');
      cy.get('h1').then(el => {
        assert.equal(el.text(), 'Bad credentials');  // this works but it isn't pretty
      });
    });

    it('an user should be able to publish an article', () => {
      cy.login('good');
      const title = 'Titre de mon nouvel article';
      const content = 'Contenu de mon nouvel article'
      cy.get('.write__title').type(title);
      cy.get('.write__content').type(content);
      cy.get('.write__button').click();
      cy.wait(1000);
      cy.get('article').then( el => {
        assert.equal(el.length, 3);
      })
    });

});