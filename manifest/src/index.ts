import { readFileSync } from 'fs';
import { join } from 'path';

interface Interface {
	https: boolean
	host: string
	port: number
	url: string
}

interface ManifestConfig {
	api: Interface
	site: Interface
}

class Manifest {
	get cwd(): string {
		return join(__filename, '../../..');
	}

	get file(): string {
		return join(this.cwd, 'manifest.json');
	}

	get config(): ManifestConfig {
		return JSON.parse(readFileSync(this.file, { encoding: 'utf-8' }));
	}
}

export const manifest = new Manifest();
