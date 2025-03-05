/// <reference types="cypress"/>


describe('Teste funcional de registro do Usuário', () => {
    it('Deve realizar o registro com sucesso', () => {
        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        //em seguida clicar em Registrar
        cy.get('a').click()
        //validar URL e fazer registro com sucesso
        cy.get('title').should('contain', 'Registrar-se')
        cy.get('[type="email"]').type("guilhermedogral0@gmail.com")
        cy.get('[name="password"]').type("guiguilima")
        cy.get('[name="confirmarSenha"]').type("guiguilima")
        //clicar em registrar e passar com sucesso !
        cy.get('button').click()
    });

    it('Validar Usuário já cadastrado', () => {
        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        //em seguida clicar em Registrar
        cy.get('a').click()
        //validar URL e tentar realizar um cadastro com e-mail já cadastrado
        cy.get('title').should('contain', 'Registrar-se')
        cy.get('[type="email"]').type("guilhermedogral0@gmail.com")
        cy.get('[name="password"]').type("guiguilima")
        cy.get('[name="confirmarSenha"]').type("guiguilima")
        cy.get('button').click()
        //Aparecer mensagem de erro
        cy.get('p').should('contain', 'Este e-mail já está registrado.')
    });

    it('Tentar realizar registro com caracteres especiais', () => {

        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        //em seguida clicar em Registrar
        cy.get('a').click()
        // Validar URL e fazer registro com caracteres especiais  
        cy.get('title').should('contain', 'Registrar-se')
        cy.get('[type="email"]').type("Guilhermedogral&*&¨%%@gmail.com")
        cy.get('[name="password"]').type("guiguilima")
        cy.get('[name="confirmarSenha"]').type("guiguilima")
        cy.get('button').click()

        //teste passado com sucesso, pagina web não permite caracteres especiais
    });
    
    it('Tentar realizar registro com senhas que não coincidam', () => {

        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        //em seguida clicar em Registrar
        cy.get('a').click()
        // Validar URL e fazer registro com caracteres especiais  
        cy.get('title').should('contain', 'Registrar-se')
        cy.get('[type="email"]').type("Guilhermedogral9@gmail.com")
        cy.get('[name="password"]').type("guiguilima")
        cy.get('[name="confirmarSenha"]').type("guiguilima1")
        cy.get('button').click()
        cy.get('p').should('contain', 'As senhas não coincidem. Tente novamente.')

        //teste passado com sucesso, pagina web não permite senha que não coincidam 
    });

});


