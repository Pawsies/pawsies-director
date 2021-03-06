import { SqsBrokerFacade, ReefService } from 'reef-service';

export default async function (config, bunyan) {

	let brokerFacade = new SqsBrokerFacade(config),
	
  let service = new ReefService(brokerFacade);

	bunyan.info('setting up reef service');

	await service.setup();

	return service;

}
