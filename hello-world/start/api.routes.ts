import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.group(() => {
    Route.get("/", "PainelController.index");
    Route.get("/usuarios", "PainelController.usuarios");
    Route.get("/usuarios/:id", "PainelController.usuario");
  }).prefix("/painel/");
}).prefix("/api");
