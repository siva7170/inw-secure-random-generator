import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Secure Random Generator
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SecureRandomGenerator } from '@awesome-cordova-plugins/secure-random-generator';
 *
 *
 * constructor(private secureRandomGenerator: SecureRandomGenerator) { }
 *
 * ...
 *
 *
 * this.secureRandomGenerator.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SecureRandomGeneratorOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param noOfLen {string} Some param to configure something
     * @param randType {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    generateSecureRandom(noOfLen: number, randType: string): Promise<any>;
}

export declare const SecureRandomGenerator: SecureRandomGeneratorOriginal;