// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
  protected users = [
    {
      id: 1,
      name: "Weslei Bruno",
    },
    {
      id: 2,
      name: "Fulano",
    },
  ];
  async index() {
    return { response: "Index do Painel" };
  }
  async usuarios() {
    return {
      user: this.users,
    };
  }

  async usuario({ params }) {
    let myRequestedUserId = params["id"];
    let myUser = this.users.find((user) => user.id == myRequestedUserId);

    if (myUser) {
      return myUser;
    } else {
      return { error: "Nenhum usuario encontrado" };
    }
    return myUser;
  }
}
