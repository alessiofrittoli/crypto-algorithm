import type Algo from './types'

class Algorithm
{
	static KTY = {
		OKP: 1,
		EC2: 2,
		RSA: 3,
	}


	/**
	 * Algorithms Map indexed by {@link Algo.Id}. For HMAC algorithms `'HS256' | 'HS384'| 'HS512'` is used.
	 * 
	 * Formats match specific requirements.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/EcKeyImportParams#namedcurve
	 * 
	 * @link [COSE Algorithms](https://www.iana.org/assignments/cose/cose.xhtml#algorithms)
	 */
	static MAP = new Map<Algo.Id, Algo.Schema>( [
		[ -7, {
			kty				: Algorithm.KTY.EC2,
			alg				: -7,
			crv				: 8,
			name			: 'ECDSA',
			hash			: 'SHA-256',
			crvSchemeName	: 'secp256k1',
			namedCurve		: 'P-256',
			webcryptoName	: 'ECDSA_w_SHA256',
			jwkAlg			: 'ES256',
		} ],
		[ -8, {
			kty				: Algorithm.KTY.OKP,
			alg				: -8,
			crv				: 6,
			name			: 'EdDSA',
			hash			: 'SHA-256',
			webcryptoName	: 'EdDSA_w_SHA256',
			jwkAlg			: 'EdDSA',
		} ],
		[ -35, {
			kty				: Algorithm.KTY.EC2,
			alg				: -35,
			crv				: 2,
			name			: 'ECDSA',
			hash			: 'SHA-384',
			crvSchemeName	: 'secp384r1',
			namedCurve		: 'P-384',
			webcryptoName	: 'ECDSA_w_SHA384',
			jwkAlg			: 'ES384',
		} ],
		[ -36, {
			kty				: Algorithm.KTY.EC2,
			alg				: -36,
			crv				: 3,
			name			: 'ECDSA',
			hash			: 'SHA-512',
			crvSchemeName	: 'secp521r1',
			namedCurve		: 'P-521',
			webcryptoName	: 'ECDSA_w_SHA512',
			jwkAlg			: 'ES512',
		} ],
		[ -37, {
			kty				: Algorithm.KTY.RSA,
			alg				: -37,
			hash			: 'SHA-256',
			jwkAlg			: 'PS256',
			name			: 'RSA-PSS',
			webcryptoName	: 'RSASSA-PSS_w_SHA256',
		} ],
		[ -38, {
			kty				: Algorithm.KTY.RSA,
			alg				: -38,
			hash			: 'SHA-384',
			jwkAlg			: 'PS384',
			name			: 'RSA-PSS',
			webcryptoName	: 'RSASSA-PSS_w_SHA384',
		} ],
		[ -39, {
			kty				: Algorithm.KTY.RSA,
			alg				: -39,
			hash			: 'SHA-512',
			jwkAlg			: 'PS512',
			name			: 'RSA-PSS',
			webcryptoName	: 'RSASSA-PSS_w_SHA512',
		} ],
		[ -257, {
			kty				: Algorithm.KTY.RSA,
			alg				: -257,
			hash			: 'SHA-256',
			jwkAlg			: 'RS256',
			name			: 'RSASSA-PKCS1-v1_5',
			webcryptoName	: 'RSASSA-PKCS1-v1_5_w_SHA256',
		} ],
		[ -258, {
			kty				: Algorithm.KTY.RSA,
			alg				: -258,
			hash			: 'SHA-384',
			jwkAlg			: 'RS384',
			name			: 'RSASSA-PKCS1-v1_5',
			webcryptoName	: 'RSASSA-PKCS1-v1_5_w_SHA384',
		} ],
		[ -259, {
			kty				: Algorithm.KTY.RSA,
			alg				: -259,
			hash			: 'SHA-512',
			jwkAlg			: 'RS512',
			name			: 'RSASSA-PKCS1-v1_5',
			webcryptoName	: 'RSASSA-PKCS1-v1_5_w_SHA512',
		} ],
		[ -65535, {
			kty				: Algorithm.KTY.RSA,
			alg				: -65535,
			hash			: 'SHA-1',
			jwkAlg			: 'RS1',
			name			: 'RSASSA-PKCS1-v1_5',
			webcryptoName	: 'RSASSA-PKCS1-v1_5_w_SHA1',
		} ],
		[ 'HS1', {
			alg				: 'HS1',
			name			: 'HMAC',
			hash			: 'SHA-1',
			webcryptoName	: 'HMAC_w_SHA1',
			jwkAlg			: 'HS1',
		} ],
		[ 'HS256', {
			alg				: 'HS256',
			name			: 'HMAC',
			hash			: 'SHA-256',
			webcryptoName	: 'HMAC_w_SHA256',
			jwkAlg			: 'HS256',
		} ],
		[ 'HS384', {
			alg				: 'HS384',
			name			: 'HMAC',
			hash			: 'SHA-384',
			webcryptoName	: 'HMAC_w_SHA384',
			jwkAlg			: 'HS384',
		} ],
		[ 'HS512', {
			alg				: 'HS512',
			name			: 'HMAC',
			hash			: 'SHA-512',
			webcryptoName	: 'HMAC_w_SHA512',
			jwkAlg			: 'HS512',
		} ],
		[ 'DS1', {
			alg				: 'DS1',
			name			: 'DSA',
			hash			: 'SHA-1',
			webcryptoName	: 'DSA_w_SHA1',
			jwkAlg			: 'DS1',
		} ],
		[ 'DS256', {
			alg				: 'DS256',
			name			: 'DSA',
			hash			: 'SHA-256',
			webcryptoName	: 'DSA_w_SHA256',
			jwkAlg			: 'DS256',
		} ],
		[ 'DS384', {
			alg				: 'DS384',
			name			: 'DSA',
			hash			: 'SHA-384',
			webcryptoName	: 'DSA_w_SHA384',
			jwkAlg			: 'DS384',
		} ],
		[ 'DS512', {
			alg				: 'DS512',
			name			: 'DSA',
			hash			: 'SHA-512',
			webcryptoName	: 'DSA_w_SHA512',
			jwkAlg			: 'DS512',
		} ],
	] )


	static by( scheme: Partial<Algo.Schema> | KeyAlgorithm )
	{
		if ( 'alg' in scheme && scheme.alg ) return Algorithm.MAP.get( scheme.alg )
		
		return (
			Array.from( Algorithm.MAP ).find(
				entry => {
					let found = true
					for ( const key in scheme ) {
						if ( ! found ) continue
						found = (
							key in scheme
							&& scheme[ key as keyof typeof scheme ] === entry[ 1 ][ key as keyof Algo.Schema ]
						)
					}
					return found
				}
			)?.[ 1 ]
		)
	}


	static byId( alg: Algo.Id )
	{
		return Algorithm.by( { alg } )
	}
}

export default Algorithm