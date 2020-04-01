/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * Initialize the FunctionVersionContentList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the Function Version resource is associated with
 * @param functionSid - The SID of the Function that is the parent of the Function Version
 * @param sid - The unique string that identifies the Function Version resource
 */
declare function FunctionVersionContentList(version: V1, serviceSid: string, functionSid: string, sid: string): FunctionVersionContentListInstance;

interface FunctionVersionContentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FunctionVersionContentContext;
  /**
   * Constructs a function_version_content
   */
  get(): FunctionVersionContentContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface FunctionVersionContentPayload extends FunctionVersionContentResource, Page.TwilioResponsePayload {
}

interface FunctionVersionContentResource {
  account_sid: string;
  content: string;
  function_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface FunctionVersionContentSolution {
  functionSid?: string;
  serviceSid?: string;
  sid?: string;
}


declare class FunctionVersionContentContext {
  /**
   * Initialize the FunctionVersionContentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the Function Version content from
   * @param functionSid - The SID of the function that is the parent of the Function Version content to fetch
   * @param sid - The SID that identifies the Function Version content to fetch
   */
  constructor(version: V1, serviceSid: string, functionSid: string, sid: string);

  /**
   * fetch a FunctionVersionContentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionVersionContentInstance) => any): Promise<FunctionVersionContentInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class FunctionVersionContentInstance extends SerializableClass {
  /**
   * Initialize the FunctionVersionContentContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the Function Version resource is associated with
   * @param functionSid - The SID of the Function that is the parent of the Function Version
   * @param sid - The unique string that identifies the Function Version resource
   */
  constructor(version: V1, payload: FunctionVersionContentPayload, serviceSid: string, functionSid: string, sid: string);

  private _proxy: FunctionVersionContentContext;
  accountSid: string;
  content: string;
  /**
   * fetch a FunctionVersionContentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionVersionContentInstance) => any): Promise<FunctionVersionContentInstance>;
  functionSid: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class FunctionVersionContentPage extends Page<V1, FunctionVersionContentPayload, FunctionVersionContentResource, FunctionVersionContentInstance> {
  /**
   * Initialize the FunctionVersionContentPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FunctionVersionContentSolution);

  /**
   * Build an instance of FunctionVersionContentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionVersionContentPayload): FunctionVersionContentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FunctionVersionContentContext, FunctionVersionContentInstance, FunctionVersionContentList, FunctionVersionContentListInstance, FunctionVersionContentPage, FunctionVersionContentPayload, FunctionVersionContentResource, FunctionVersionContentSolution }
