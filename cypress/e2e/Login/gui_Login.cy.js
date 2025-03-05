describe('Teste funcional de login do Usuário', () => {
    it('deve realizar o registro e o login', () => {

        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        //em seguida clicar em Registrar
        cy.get('a').click()
        // Validar URL e fazer registro 
        cy.get('title').should('contain', 'Registrar-se')
        cy.get('[type="email"]').type("guilhermedogral1@gmail.com")
        cy.get('[name="password"]').type("guiguilima1")
        cy.get('[name="confirmarSenha"]').type("guiguilima1")
        //clicar no botão para registrar.
        cy.get('button').click()
        //validar se a URL foi para tela de Login
        cy.get('h2').should('contain', 'Login')
        //realizar login com sucesso
        cy.get('[type="email"]').type("guilhermedogral1@gmail.com")
        cy.get('[type="password"]').type("guiguilima1")
        //clicar em "Entrar" e logar com sucesso
        cy.get('button').click()
    });

    it('Cliente deve realizar o login com usuário já registrado', () => {
        
        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        // Validar URL e fazer registro
        cy.get('h2').should('contain', 'Login')
        cy.get('[type="email"]').type("guilhermedogral1@gmail.com")
        cy.get('[type="password"]').type("guiguilima1")
        //clicar em "Entrar" e logar com sucesso
        cy.get('button').click()
    });

    it('Cliente deve tentar logar com login inexistente', () => {
        
        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        // Validar URL e fazer registro
        cy.get('h2').should('contain', 'Login')
        cy.get('[type="email"]').type("guilhermedo080@gmail.com")
        cy.get('[type="password"]').type("guiguilima123")
        //clicar em "Entrar" e falhar
        cy.get('button').click()
    });
    
    it.only('Cliente deve tentar logar normalmente e visualizar a pagina após o login', () => {
        
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
    });

    it('tentativa de login em branco', () => {
        
        //metodo para conseguir abrir a url
        cy.visit("http://localhost:8080/login")
        // Validar URL e fazer registro
        cy.get('h2').should('contain', 'Login')
        cy.get('[type="email"]').type("")
        cy.get('[type="password"]').type("guiguilima1")
        //clicar em "Entrar" e aparecer mensagem de erro "Preencha esse campo" indicando a caixa para colocar o e-mail
        cy.get('button').click()
    });

});