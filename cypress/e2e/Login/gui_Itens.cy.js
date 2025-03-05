describe('Validar itens e valores', () => {
    it('deve validar o elemento "ver itens" e verificar se possui itens', () => {

        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        // Validar URL e fazer registro
        cy.get('h2').should('contain', 'Login')
        cy.get('[type="email"]').type("guilhermedogral2@gmail.com")
        cy.get('[type="password"]').type("guiguilima")
        //clicar em "Entrar"
        cy.get('button').click()
        //deve aparecer o titulo "Bem-vindo ao Dashboard" para validar a URL
        cy.get('h2').should('contain', 'Bem-vindo ao Dashboard')
        //metodo para clicar no botão para ver os "Itens"
        cy.get('a').click()
        //validação de URL por texto novamente
        cy.get('h2').should('contain', 'Itens Disponíveis')
        //validação de produtos com valores
        cy.get('ul > :nth-child(1) > :nth-child(1)').should('contain', 'Produto A')
        cy.get('ul > :nth-child(1) > :nth-child(2)').should('contain', '29.99')
        cy.get('ul > :nth-child(2) > :nth-child(1)').should('contain', 'Produto B')
        cy.get('ul > :nth-child(2) > :nth-child(2)').should('contain', '49.99')
        cy.get(':nth-child(3) > :nth-child(1)').should('contain', 'Produto C')
        cy.get(':nth-child(3) > :nth-child(2)').should('contain', '19.99')
        cy.get(':nth-child(4) > :nth-child(1)').should('contain', 'Produto D')
        cy.get(':nth-child(4) > :nth-child(2)').should('contain', '99.99')
        cy.get(':nth-child(5) > :nth-child(1)').should('contain', 'Produto E')
        cy.get(':nth-child(5) > :nth-child(2)').should('contain', '59.99')


    });
});