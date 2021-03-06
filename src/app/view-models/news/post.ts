/**
 * BC Gov News API Service 1.0
 * News API
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Asset } from './asset';
import { DataModel } from './dataModel';
import { Document } from './document';


export interface Post extends DataModel {
    kind?: string;
    atomId?: string;
    summary?: string;
    socialMediaSummary?: string;
    socialMediaHeadline?: string;
    keywords?: string;
    publishDate?: Date;
    leadMinistryKey?: string;
    hasMediaAssets?: boolean;
    isNewsOnDemand?: boolean;
    assetUrl?: string;
    location?: string;
    documents?: Array<Document>;
    reference?: string;
    redirectUri?: string;
    ministryKeys?: Array<string>;
    sectorKeys?: Array<string>;
    serviceKeys?: Array<string>;
    tagKeys?: Array<string>;
    themeKeys?: Array<string>;
    facebookPictureUri?: string;
    azureAssets?: Array<Asset>;
}
