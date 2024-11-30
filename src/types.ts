namespace Algorithm
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
			alg				: Algorithm.HMAC.Id
			name			: Algorithm.HMAC.Name
			hash			: Algorithm.Hash
			webcryptoName	: Algorithm.HMAC.WebcryptoName
			jwkAlg			: Algorithm.HMAC.JwkName
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
			kty				: Algorithm.KTY.RSA
			alg				: Algorithm.RSA.Id
			name			: Algorithm.RSA.Name
			hash			: Algorithm.Hash
			webcryptoName	: Algorithm.RSA.WebcryptoName
			jwkAlg			: Algorithm.RSA.JwkName
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
			kty				: Algorithm.KTY.RSA
			alg				: Algorithm.RSAPss.Id
			name			: Algorithm.RSAPss.Name
			hash			: Algorithm.DefaultHash
			webcryptoName	: Algorithm.RSAPss.WebcryptoName
			jwkAlg			: Algorithm.RSAPss.JwkName
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
			kty				: Algorithm.KTY.EC2
			alg				: Algorithm.ECDSA.Id
			crv				: Algorithm.Curve.Id
			crvSchemeName	: Algorithm.Curve.SchemeName
			namedCurve		: Algorithm.Curve.Name
			name			: Algorithm.ECDSA.Name
			hash			: Algorithm.DefaultHash
			webcryptoName	: Algorithm.ECDSA.WebcryptoName
			jwkAlg			: Algorithm.ECDSA.JwkName
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
			kty				: Algorithm.KTY.EC2
			alg				: Algorithm.EdDSA.Id
			crv				: Algorithm.Curve.Id
			name			: Algorithm.EdDSA.Name
			hash			: Algorithm.DefaultHash
			webcryptoName	: Algorithm.EdDSA.WebcryptoName
			jwkAlg			: Algorithm.EdDSA.JwkName
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
			alg				: Algorithm.DSA.Id
			name			: Algorithm.DSA.Name
			hash			: Algorithm.Hash
			webcryptoName	: Algorithm.DSA.WebcryptoName
			jwkAlg			: Algorithm.DSA.JwkName
		}
	}

	
	/**
	 * Algorithm JWK Name.
	 * 
	 */
	export type Name = (
		| Algorithm.HMAC.Name
		| Algorithm.RSA.Name
		| Algorithm.RSAPss.Name
		| Algorithm.ECDSA.Name
		| Algorithm.EdDSA.Name
		| Algorithm.DSA.Name
	)

	
	/**
	 * Algorithm JWK Name.
	 * 
	 * @link https://datatracker.ietf.org/doc/html/rfc7518#section-3.1
	 */
	export type JwkName = (
		| Algorithm.HMAC.JwkName
		| Algorithm.RSA.JwkName
		| Algorithm.RSAPss.JwkName
		| Algorithm.ECDSA.JwkName
		| Algorithm.EdDSA.JwkName
		| Algorithm.DSA.JwkName
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
	export type Hash		= Algorithm.DefaultHash | Algorithm.RSA.Hash


	export enum KTY
	{
		OKP = 1,
		EC2 = 2,
		RSA = 3,
	}

	export type StandardId = (
		| Algorithm.RSA.Id
		| Algorithm.RSAPss.Id
		| Algorithm.ECDSA.Id
		| Algorithm.EdDSA.Id
	)
	export type NonIANAId = (
		| Algorithm.DSA.Id
	)
	/** Algorithm Identifier. */
	export type Id = (
		| Algorithm.HMAC.Id
		| Algorithm.StandardId
		| Algorithm.NonIANAId
	)
	
	
	export namespace Curve
	{
		export type Id			= 1 | 2 | 3 | 6 | 8
		export type SchemeName	= 'secp256k1' | 'secp384r1' | 'secp521r1'
		export type Name		= 'P-256' | 'P-384' | 'P-521'
	}
	
	
	export type WebcryptoName = (
		| Algorithm.HMAC.WebcryptoName
		| Algorithm.RSA.WebcryptoName
		| Algorithm.RSAPss.WebcryptoName
		| Algorithm.ECDSA.WebcryptoName
		| Algorithm.EdDSA.WebcryptoName
		| Algorithm.DSA.WebcryptoName
	)

	export type Schema = (
		| Algorithm.HMAC.Schema
		| Algorithm.RSA.Schema
		| Algorithm.RSAPss.Schema
		| Algorithm.ECDSA.Schema
		| Algorithm.EdDSA.Schema
		| Algorithm.DSA.Schema
	)
}

export default Algorithm