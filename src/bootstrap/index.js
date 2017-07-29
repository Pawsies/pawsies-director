import setupBunyanLog from './setupBunyanLog';
import setupReefClientAsync from './setupReefClientAsync';
import setupReefServiceAsync from './setupReefServiceAsync';

export async function setupStateAsync(config) {

	let bunyan = setupBunyanLog({
		level: config.LOG_LEVEL || 'info',
		stream: config.LOG_STREAM,
		name: 'pawsies-director'
	});

	let reefClient = await setupReefClientAsync({
		region: config.AWS_REGION,
		accessKeyId: config.AWS_ACCESSKEYID,
		secretAccessKey: config.AWS_SECRETACCESSKEY,
		clientDomain: 'pawsies-director',
		clientLane: 'singleton'
	}, bunyan);

	let reefService = await setupReefServiceAsync({
		region: config.AWS_REGION,
		accessKeyId: config.AWS_ACCESSKEYID,
		secretAccessKey: config.AWS_SECRETACCESSKEY,
		serviceDomain: 'pawsies-director',
		serviceLane: config.REEF_LANE
	}, bunyan);

	return { bunyan, reefClient, reefService };

}
