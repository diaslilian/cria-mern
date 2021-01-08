CRUD MERN - Usuários

- Cadastro de usuário com os seguintes dados:

      Nome string, email string, fone string, senha string, perfil enum["Administrador", "Usuário, ativo enum["Ativo", "Inativo"], data inativacao Date;

Regras:

      - Apenas usuário com perfil administrador pode manipular os usuários (Criar, alterar, apaga(logicamente)

      - Usuário com perfil de usuário pode alterar apenas a sua própria senha;

      - Primeiro usuário, que dará vida aos demais, será criado a mão;
