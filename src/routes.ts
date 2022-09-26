import { Router } from "express";
import { ensureAuthenticateDeliverman } from "./middlewares/ensureAthenticateDeliverman";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClients";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllWhithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDate/FindAllWhithoutEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllWhithoutEndDateController = new FindAllWhithoutEndDateController();

routes.post("/client/", createClientController.handle);

routes.post("/client/authenticate", authenticateClientController.handle);

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, deliveryController.handle);

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliverman,
  findAllWhithoutEndDateController.handle
);

export { routes };
