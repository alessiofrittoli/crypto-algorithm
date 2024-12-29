export namespace Algo
{
	export namespace HMAC
	{
		export type Id = 'HS1' | 'HS256' | 'HS384' | 'HS512'
		export type Name = 'HMAC'

		export type JwkName = (
			| 'HS1' // Data will be singed using HMAC SHA-1
			| 'HS256' // Data will be singed using HMAC SHA-256
			| 'HS384' // Data will be singed using HMAC SHA-384
			| 'HS512' // Data will be singed using HMAC SHA-512
		)

		export type WebcryptoName = (
			| 'HMAC_w_SHA1'
			| 'HMAC_w_SHA256'
			| 'HMAC_w_SHA384'
			| 'HMAC_w_SHA512'
		)

		export interface Schema extends KeyAlgorithm
		{
			alg				: Algo.HMAC.Id
			name			: Algo.HMAC.Name
			hash			: Algo.Hash
			webcryptoName	: Algo.HMAC.WebcryptoName
			jwkAlg			: Algo.HMAC.JwkName
		}
	}


	export namespace RSA
	{
		export type Id = -257 | -258 | -259 | -65535
		export type Name = 'RSASSA-PKCS1-v1_5'
		// export type Hash = 'SHA-1' | 'RSA-SHA256' | 'RSA-SHA384' | 'RSA-SHA512'
		export type Hash = 'SHA-1'

		export type JwkName = (
			| 'RS256' // Keys must be generated with RSASSA-PKCS1-v1_5 and data will be signed using SHA-256
			| 'RS384' // Keys must be generated with RSASSA-PKCS1-v1_5 and data will be signed using SHA-384
			| 'RS512' // Keys must be generated with RSASSA-PKCS1-v1_5 and data will be signed using SHA-512
			| 'RS1' // Keys must be generated with RSASSA-PKCS1-v1_5 and data will be signed using SHA1
		)

		export type WebcryptoName = (
			| 'RSASSA-PKCS1-v1_5_w_SHA256'
			| 'RSASSA-PKCS1-v1_5_w_SHA384'
			| 'RSASSA-PKCS1-v1_5_w_SHA512'
			| 'RSASSA-PKCS1-v1_5_w_SHA1'
		)

		export interface Schema extends KeyAlgorithm
		{
			kty				: Algo.KTY.RSA
			alg				: Algo.RSA.Id
			name			: Algo.RSA.Name
			hash			: Algo.Hash
			webcryptoName	: Algo.RSA.WebcryptoName
			jwkAlg			: Algo.RSA.JwkName
		}
	}
	
	
	export namespace RSAPss
	{
		export type Id = -37 | -38 | -39
		// export type Name = 'RSASSA-PSS'
		export type Name = 'RSA-PSS'

		export type JwkName = (
			| 'PS256' // Keys must be generated with RSASSA-PSS using SHA-256 and MGF1 with SHA-256 and data will be signed using SHA-256
			| 'PS384' // Keys must be generated with RSASSA-PSS using SHA-384 and MGF1 with SHA-384 and data will be signed using SHA-384
			| 'PS512' // Keys must be generated with RSASSA-PSS using SHA-512 and MGF1 with SHA-512 and data will be signed using SHA-512
		)

		export type WebcryptoName = (
			| 'RSASSA-PSS_w_SHA256'
			| 'RSASSA-PSS_w_SHA384'
			| 'RSASSA-PSS_w_SHA512'
		)

		export interface Schema extends KeyAlgorithm
		{
			kty				: Algo.KTY.RSA
			alg				: Algo.RSAPss.Id
			name			: Algo.RSAPss.Name
			hash			: Algo.DefaultHash
			webcryptoName	: Algo.RSAPss.WebcryptoName
			jwkAlg			: Algo.RSAPss.JwkName
		}
	}

	export namespace ECDSA
	{
		export type Id = -7 | -35 | -36
		export type Name = 'ECDSA'

		export type JwkName = (
			| 'ES256' // Keys must be generated with ECDSA using P-256 (secp256k1) and data will be signed using SHA-256
			| 'ES384' // Keys must be generated with ECDSA using P-384 (secp384r1) and data will be signed using SHA-384
			| 'ES512' // Keys must be generated with ECDSA using P-521 (secp521r1) and data will be signed using SHA-512
		)

		export type WebcryptoName = (
			| 'ECDSA_w_SHA256'
			| 'ECDSA_w_SHA384'
			| 'ECDSA_w_SHA512'
		)

		export interface Schema extends EcKeyAlgorithm
		{
			kty				: Algo.KTY.EC2
			alg				: Algo.ECDSA.Id
			crv				: Algo.Curve.Id
			crvSchemeName	: Algo.Curve.SchemeName
			namedCurve		: Algo.Curve.Name
			name			: Algo.ECDSA.Name
			hash			: Algo.DefaultHash
			webcryptoName	: Algo.ECDSA.WebcryptoName
			jwkAlg			: Algo.ECDSA.JwkName
		}
	}


	export namespace EdDSA
	{
		export type Id = -8
		export type Name = 'EdDSA'
		export type JwkName = 'EdDSA' // Keys must be generated with ed25519 and data will be signed using SHA-256
		// | 'ED25519' // Keys must be generated with ed25519 and data will be signed using SHA-256
		// export type WebcryptoName = 'EdDSA'
		export type WebcryptoName = 'EdDSA_w_SHA256'

		export interface Schema extends KeyAlgorithm
		{
			kty				: Algo.KTY.EC2
			alg				: Algo.EdDSA.Id
			crv				: Algo.Curve.Id
			name			: Algo.EdDSA.Name
			hash			: Algo.DefaultHash
			webcryptoName	: Algo.EdDSA.WebcryptoName
			jwkAlg			: Algo.EdDSA.JwkName
		}
	}


	export namespace DSA
	{
		export type Id = 'DS1' | 'DS256' | 'DS384' | 'DS512'
		export type Name = 'DSA'

		export type JwkName = (
			| 'DS1' // Keys must be generated with DSA and data will be signed using SHA-1
			| 'DS256' // Keys must be generated with DSA and data will be signed using SHA-256
			| 'DS384' // Keys must be generated with DSA and data will be signed using SHA-384
			| 'DS512' // Keys must be generated with DSA and data will be signed using SHA-512
		)

		export type WebcryptoName = (
			| 'DSA_w_SHA1'
			| 'DSA_w_SHA256'
			| 'DSA_w_SHA384'
			| 'DSA_w_SHA512'
		)

		export interface Schema extends KeyAlgorithm
		{
			alg				: Algo.DSA.Id
			name			: Algo.DSA.Name
			hash			: Algo.Hash
			webcryptoName	: Algo.DSA.WebcryptoName
			jwkAlg			: Algo.DSA.JwkName
		}
	}

	
	/**
	 * Algorithm JWK Name.
	 * 
	 */
	export type Name = (
		| Algo.HMAC.Name
		| Algo.RSA.Name
		| Algo.RSAPss.Name
		| Algo.ECDSA.Name
		| Algo.EdDSA.Name
		| Algo.DSA.Name
	)

	
	/**
	 * Algorithm JWK Name.
	 * 
	 * @link https://datatracker.ietf.org/doc/html/rfc7518#section-3.1
	 */
	export type JwkName = (
		| Algo.HMAC.JwkName
		| Algo.RSA.JwkName
		| Algo.RSAPss.JwkName
		| Algo.ECDSA.JwkName
		| Algo.EdDSA.JwkName
		| Algo.DSA.JwkName
	)

	export type OtherHash = (
		| 'RSA-MD5'
		| 'RSA-RIPEMD160'
		| 'RSA-SHA1'
		| 'RSA-SHA1-2'
		| 'RSA-SHA224'
		| 'RSA-SHA256'
		| 'RSA-SHA3-224'
		| 'RSA-SHA3-256'
		| 'RSA-SHA3-384'
		| 'RSA-SHA3-512'
		| 'RSA-SHA384'
		| 'RSA-SHA512'
		| 'RSA-SHA512/224'
		| 'RSA-SHA512/256'
		| 'RSA-SM3'
		| 'blake2b512'
		| 'blake2s256'
		| 'id-rsassa-pkcs1-v1_5-with-sha3-224'
		| 'id-rsassa-pkcs1-v1_5-with-sha3-256'
		| 'id-rsassa-pkcs1-v1_5-with-sha3-384'
		| 'id-rsassa-pkcs1-v1_5-with-sha3-512'
		| 'md5'
		| 'md5-sha1'
		| 'md5WithRSAEncryption'
		| 'ripemd'
		| 'ripemd160'
		| 'ripemd160WithRSA'
		| 'rmd160'
		| 'sha1'
		| 'sha1WithRSAEncryption'
		| 'sha224'
		| 'sha224WithRSAEncryption'
		| 'sha256'
		| 'sha256WithRSAEncryption'
		| 'sha3-224'
		| 'sha3-256'
		| 'sha3-384'
		| 'sha3-512'
		| 'sha384'
		| 'sha384WithRSAEncryption'
		| 'sha512'
		| 'sha512-224'
		| 'sha512-224WithRSAEncryption'
		| 'sha512-256'
		| 'sha512-256WithRSAEncryption'
		| 'sha512WithRSAEncryption'
		| 'shake128'
		| 'shake256'
		| 'sm3'
		| 'sm3WithRSAEncryption'
		| 'ssl3-md5'
		| 'ssl3-sha1'
	)
	export type DefaultHash	= 'SHA-256' | 'SHA-384' | 'SHA-512'
	export type Hash		= Algo.DefaultHash | Algo.RSA.Hash


	export enum KTY
	{
		OKP = 1,
		EC2 = 2,
		RSA = 3,
	}

	export type StandardId = (
		| Algo.RSA.Id
		| Algo.RSAPss.Id
		| Algo.ECDSA.Id
		| Algo.EdDSA.Id
	)
	export type NonIANAId = (
		| Algo.DSA.Id
	)
	/** Algorithm Identifier. */
	export type Id = (
		| Algo.HMAC.Id
		| Algo.StandardId
		| Algo.NonIANAId
	)
	
	
	export namespace Curve
	{
		export type Id			= 1 | 2 | 3 | 6 | 8
		export type SchemeName	= 'secp256k1' | 'secp384r1' | 'secp521r1'
		export type Name		= 'P-256' | 'P-384' | 'P-521'
	}
	
	
	export type WebcryptoName = (
		| Algo.HMAC.WebcryptoName
		| Algo.RSA.WebcryptoName
		| Algo.RSAPss.WebcryptoName
		| Algo.ECDSA.WebcryptoName
		| Algo.EdDSA.WebcryptoName
		| Algo.DSA.WebcryptoName
	)

	export type Schema = (
		| Algo.HMAC.Schema
		| Algo.RSA.Schema
		| Algo.RSAPss.Schema
		| Algo.ECDSA.Schema
		| Algo.EdDSA.Schema
		| Algo.DSA.Schema
	)
}