import { Algorithm } from '../src'

describe( 'Algorithm.by', () => {

	it( 'returns the right schema using Algorithm.Curve.Id', () => {
		expect( Algorithm.by( { crv: 3 } )?.webcryptoName )
			.toBe( 'ECDSA_w_SHA512' )
	} )

	it( 'returns the right schema using Algorithm.KTY', () => {
		expect( Algorithm.by( { kty: Algorithm.KTY.RSA } )?.webcryptoName )
			.toBe( 'RSASSA-PSS_w_SHA256' )
	} )	

} )


describe( 'Algorithm.byId', () => {

	it( 'returns the right schema using Algorithm.HMAC.Id', () => {
		expect( Algorithm.byId( 'HS256' )?.webcryptoName )
			.toBe( 'HMAC_w_SHA256' )
	} )

	it( 'returns the right schema using Algorithm.StandardId', () => {
		expect( Algorithm.byId( -7 )?.webcryptoName )
			.toBe( 'ECDSA_w_SHA256' )
	} )

	it( 'returns the right schema using Algorithm.NonIANAId', () => {
		expect( Algorithm.byId( 'DS256' )?.webcryptoName )
			.toBe( 'DSA_w_SHA256' )
	} )	

} )