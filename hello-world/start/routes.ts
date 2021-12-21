import Route from "@ioc:Adonis/Core/Route";

Route.get("/", "HomeController.index");
Route.get("/sobre", "HomeController.sobre");

Route.get("/painel/", "PainelController.index");
Route.get("/painel/usuarios", "PainelController.usuarios");
