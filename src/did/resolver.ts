import { Resolver } from 'did-resolver';
import { getResolver } from 'web-did-resolver';

const webResolver = getResolver();

const didResolver = new Resolver({
  ...webResolver
});

export const resolve = async (did: string) => didResolver.resolve(did);