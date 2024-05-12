// routes.js

import express from 'express';
import { getAllAdminRoles } from '../controllers/adminroleController.js';
import { getQrCode } from '../controllers/qr_controller.js';
import { getAllBanks, createBank } from '../controllers/bankController.js';
import { getFormWizard } from '../controllers/form_wizard.js';

const adminRoleRouter = express.Router();
const getbankRouter = express.Router();
const createBankRouter = express.Router();
const createFormWizard = express.Router();
const createQR = express.Router();


adminRoleRouter.get('/', getAllAdminRoles);
getbankRouter.get('/', getAllBanks);
// Route for creating a bank
createBankRouter.post('/', createBank);
createFormWizard.get('/',getFormWizard);
createQR.get('/',getQrCode);

export { adminRoleRouter, getbankRouter, createBankRouter,createFormWizard,createQR };
