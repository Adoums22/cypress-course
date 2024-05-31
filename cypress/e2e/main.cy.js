// <reference types="cypress" />
context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p').should('have.text', 'Caesar Cypher');
    });

    it('ceasar compute should be correct', () => {
        cy.dataCy('cypher-key').type('6');
        cy.get('#text').type('Hello World!');
        cy.get('#Cypher').click()
        cy.get('#result').should('have.text', 'Nkrru Cuxrj!');
    });
})
   
context('LightBox', () => {
    beforeEach(() => {

        cy.visit('../../app/lightbox.html');
        // Clique sur l'image pour ouvrir la lightbox
        cy.get('[data-cy="lightbox"]').click();
    });

    it('lightbox should be open when i click', () => {
        cy.get('[data-cy="lightboxOpen"]').should('be.visible');
    });

    it('lightbox should close when clicking outside', () => {
        cy.get('body').click(0, 0);  

        cy.get('[data-cy="lightboxOpen"]').should('not.be.visible');
    });

    it('add like when i click in overley and verify counter', () => {
        cy.get('[data-cy="likeOverlay"]').click();

        cy.get('[data-cy="likesCount"]').should('have.text', '1');

        cy.get('body').click(0, 0);  

        cy.get('[data-cy="likeCountHover"]').should('have.text', '1');
    })

    it('delte like when i click in overley and verify counter', () => {
        cy.get('[data-cy="likeOverlay"]').click();

        cy.get('[data-cy="dislikeOverlay"]').click();

        cy.get('[data-cy="likesCount"]').should('have.text', '0');

        cy.get('body').click(0, 0);  

        cy.get('[data-cy="likeCountHover"]').should('have.text', '0');
    })

    it('add a comment when i click in publish', () => {
        cy.get('[data-cy="comment-author"]').click();

        cy.get('[data-cy="comment-author"]').type('Cypress is awesome!');

        cy.get('[data-cy="publish-comment"]').click();

        cy.get('[data-cy="comment-body"]').should('have.text', 'Cypress is awesome!');
    })

    it('add empty comment should be impossible ', () => {
        cy.get('[data-cy="publish-comment"]').should('be.disabled');
    })

    it('should hide comment wehn i click ', () => {
        cy.get('[data-cy="comment-author"]').click();

        cy.get('[data-cy="comment-author"]').type('Cypress is awesome!');

        cy.get('[data-cy="publish-comment"]').click();

        cy.get('[data-cy="hide-comment"]').click();

        cy.get('[data-cy="comment-body"]').should('not.be.visible');
    })

    it('count comment overlay and hover', () => {
        cy.get('[data-cy="comment-author"]').click();

        cy.get('[data-cy="comment-author"]').type('Cypress is awesome!');

        cy.get('[data-cy="publish-comment"]').click();

        cy.get('[data-cy="hide-comment"]').should('have.text', 'Hide 1 comment');

        cy.get('body').click(0, 0);

        cy.get('[data-cy="comment-count-hover"]').should('have.text', '1');
    })

    it('verifiy plurial comment', () => {
        cy.get('[data-cy="comment-author"]').click();

        cy.get('[data-cy="comment-author"]').type('Cypress is awesome!');

        cy.get('[data-cy="publish-comment"]').click();

        cy.get('[data-cy="hide-comment"]').should('have.text', 'Hide 1 comment');

        cy.get('[data-cy="comment-author"]').click();

        cy.get('[data-cy="comment-author"]').type('Test plurial comments!');

        cy.get('[data-cy="publish-comment"]').click();

        cy.get('[data-cy="hide-comment"]').should('have.text', 'Hide 2 comments');

    })

    
})