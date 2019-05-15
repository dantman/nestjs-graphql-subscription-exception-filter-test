import {Resolver, Query, Args} from "@nestjs/graphql";
import {Acme} from "./Acme";
import {AcmeError} from "./AcmeError";

@Resolver('Acme')
export class AcmeResolver {
	@Query()
	async acme(@Args('id') id: number): Promise<Acme> {
		if (id === 1) {
			return new Acme(1, 'Test');
		} else {
			throw new AcmeError(`No acme #${id}`);
		}
	}
}