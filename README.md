
# Aplicação financeira
Esse repositório foi criado para o desafio da formação de desenvolvedores da Cod3r.

## Como participar
Para participar do repositório envie uma mensagem no canal do discord para thalesoliveira6115

## Canais do discord
- Geral: Sinta-se livre para contar piadas e reclamar da vida
- Requisitos do projeto: Tire dúvidas sobre os requisitos com o PO e stakeholders
- Features: Tire dúvidas e peça ajuda sobre sua feature em desenvolvidmento
- Bugs: Tire dúvidas e peça ajuda sobre seu bug em desenvolvidmento

## Documentação
As documentações recebidas do cliente podem ser acessadas em: https://github.com/especialistadev/projetos-equipes-1/tree/main/app-financeira

## Configuração
### Requisitos
 - Node versão 18.0 ou superior instalado
 - ts-node-dev instalado globalmente
 - Docker latest

### Clonagem do projeto
- SSH: git@github.com:ThalesOliveira1998/financeApplication.git
- HTTPS: https://github.com/ThalesOliveira1998/financeApplication.git

### Execucação do projeto localmente
Em seu computador, navegue até o diretório do projeto clonado e execute o seguinte comando de terminal
```bash
npm install
```
Execute o projeto:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Acesse o endereço abaixo com seu navegador de internet para abrir o pgAdmin e acessar o banco de dados do projeto:<br>
[http://localhost:8081](http://localhost:8081)

Acesse o endereço abaixo com seu navegador de internet para visualizar o projeto:<br>
[http://localhost:3000](http://localhost:3000)

### Criação da base de dados local
Em seu computador, com o projeto executando (*npm run dev*) navegue até o diretório do projeto clonado e execute o seguinte comando de terminal
```bash
npx prisma migrate dev
```

## Documentação de testes

### A escrita dos testes deve manter o seguinte padrão:
1. Descreva o que está sendo testado
2. O que deve ser feito pelo código
3. Quais as expectativa do teste

Exemplo:
```javascript
describe("delete controller", () => { //1
    const api = AxiosInstance.generate();

    test("should delete an existing user", async () => { //2
        const headers: any = await Authorization.getHeaders();
        const { status, message } = await api.delete("/user/delete", {
            headers,
            data: {
                email: users.validCredentials.email
            }
        });

        expect(status).toBe(200); //3
        expect(message).toBe("Usuário excluído com sucesso"); //3
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




