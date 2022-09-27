import { Router } from "express";
import { ensureAuthenticateDeliverman } from "./middlewares/ensureAthenticateDeliverman";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClients";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriresController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllWhithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDate/FindAllWhithoutEndDateController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updatedeliverman/useCases/UpdateDeliverymanController";
import { UpdateEndController } from "./modules/deliveries/useCases/updateEndDate/updateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriresDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/findAllDeliveriresDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllWhithoutEndDateController = new FindAllWhithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriresClient = new FindAllDeliveriresController();
const findAllDeliveriresDeliveryman =
  new FindAllDeliveriresDeliverymanController();
const updateEndController = new UpdateEndController();

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

routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAuthenticateDeliverman,
  updateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriresClient.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriresDeliveryman.handle
);

routes.put(
  "/delivery/updateEndDate/:id",
  ensureAuthenticateClient,
  updateEndController.handle
);

export { routes };
