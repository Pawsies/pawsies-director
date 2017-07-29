import curry from 'curry';

import registerUser from './handlers/registerUser';
import authenticateUser from './handlers/authenticateUser';
import updateUserSession from './handlers/updateUserSession';
import upsertPet from './handlers/upsertPet';
import updateDevice from './handlers/updateDevice';
import registerDevice from './handlers/registerDevice';
import authenticateDevice from './handlers/authenticateDevice';
import releaseFood from './handlers/releaseFood';
import releaseWater from './handlers/releaseWater';
import detectPetFeed from './handlers/detectPetFeed';
import detectPetDrank from './handlers/detectPetDrank';
import userSession from './handlers/userSession';
import petList from './handlers/petList';
import petDetail from './handlers/petDetail';
import deviceList from './handlers/deviceList';
import deviceDetail from './handlers/deviceDetail';

export default async function (config, state) {

	let { bunyan, reefClient, reefService } = state;

	bunyan.info('starting up reef client');

	await reefClient.start();

	bunyan.info('hooking reef runners');

  reefService.addRunner('REGISTER_USER', curry(registerUser)(config, state));
  reefService.addRunner('AUTHENTICATE_USER', curry(authenticateUser)(config, state));
  reefService.addRunner('UPDATE_USER_SESSION', curry(updateUserSession)(config, state));
  reefService.addRunner('UPSERT_PET', curry(upsertPet)(config, state));
  reefService.addRunner('UPDATE_DEVICE', curry(updateDevice)(config, state));
  reefService.addRunner('REGISTER_DEVICE', curry(registerDevice)(config, state));
  reefService.addRunner('AUTHENTICATE_DEVICE', curry(authenticateDevice)(config, state));
  reefService.addRunner('RELEASE_FOOD', curry(releaseFood)(config, state));
  reefService.addRunner('RELEASE_WATER', curry(releaseWater)(config, state));
  reefService.addRunner('DETECT_PET_FEED', curry(detectPetFeed)(config, state));
  reefService.addRunner('DETECT_PET_DRANK', curry(detectPetDrank)(config, state));
	reefService.addResolver('USER_SESSION', curry(userSession)(config, state));
	reefService.addResolver('PET_LIST', curry(petList)(config, state));
	reefService.addResolver('PET_DETAIL', curry(petDetail)(config, state));
	reefService.addResolver('DEVICE_LIST', curry(deviceList)(config, state));
	reefService.addResolver('DEVICE_DETAIL', curry(deviceDetail)(config, state));

	bunyan.info('starting up reef service');

	await reefService.start();

	bunyan.info('listening');

}
