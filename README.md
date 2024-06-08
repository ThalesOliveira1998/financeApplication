
# Aplicação financeira

Esse repositório foi criado para o desafio da formação de desenvolvedores da Cod3r.


# Como participar

Para participar do repositório envie uma mensagem no canal do discord para thalesoliveira6115

## Canal do discord
canal geral - sinta-se livre para contar piadas e reclamar da vida
requisitos do projeto - tire dúvidas sobre os requisitos com o PO e stakeholders
features - tire dúvidas e peça ajuda sobre sua feature em desenvolvidmento
bugs - tire dúvidas e peça ajuda sobre seu bug em desenvolvidmento


## Documentação
As documentações recebidas do cliente podem ser acessadas em : https://github.com/especialistadev/projetos-equipes-1/tree/main/app-financeira

### Requisitos de configuração
 - Node v>= 18.0
 - Test-Node-Dev global
 - Docker latest

### Clonagem do repositório e execucação do projeto
 - git clone xxxxxxx
 - navegue até o diretório do projeto e execute
   ```bash
     npm install
   ```
- execute o projeto:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
To open pgAdmin and access the project database, just access the address [http://localhost:8081](http://localhost:8081) with your browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Documentação de testes

Os testes devem manter o padrão do framework JEST.
 - Descreva o que está sendo testado
 - O que deve ser feito pelo código
 - E qual a expectativa do teste

```<code>
describe("delete controller", () => {
    const api = AxiosInstance.generate();

    test("should delete an existing user", async () => {
        const headers: any = await Authorization.getHeaders();
        const { status, data } = await api.delete("/user/delete", {
            headers,
            data: {
                email: users.validCredentials.email
            }
        });

        expect(status).toBe(200);
    });
});
```  

## Critérios de linter
Os critérios de linter estão definidos nas configurações do projeto. **Não permita que sua IDE, nem faça de maneira manual, a alteração deste arquivo.**

## Camadas da aplicação / estrutura do projeto
 - src
   - app #UI
     - user
        - page.tsx // user profile
        - user-list
           - page.tsx // users list
        - controllers
           -  
   - api
   - infrastrucute
   - domain
     - user
       - user.ts // user domain
 - tests
  
## Critérios para classes de domínio
- C1
- C2
- C3
- C4




