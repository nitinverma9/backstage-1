/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import { searchEngineExtensionPoint, SearchEngineExtensionPoint } from'@backstage/plugin-search-node';
// import { createRouter } from './router';

// class SearchEngineExtensionPointImpl implements SearchSearchEngineExtensionPoint {
//   private searchEngine: SearchEngine | undefined;

//   setSearchEngine(searchEngine: SearchEngine) {
//     if (this.searchEngine) {
//       throw new Error('Multiple Search engines is not supported at this time');
//     }
//     this.searchEngine = searchEngine;
//   }
// }

// export interface SearchPluginOptions {
//   collators: Array<RegisterCollatorParameters>;
//   decorators: Array<RegisterDecoratorParameters>;
// }

// async function createSearchEngine(
//    env: PluginEnvironment,
// ): Promise<SearchEngine> {
// if (env.config.has('search.elasticsearch')) {
// return await ElasticSearchSearchEngine.fromConfig({
// logger: env.logger,
// config: env.config,
// });
// }
// if (await PgSearchEngine.supported(env.database)) {
// return await PgSearchEngine.fromConfig(env.config, {
// database: env.database,
// });
// }
// return new LunrSearchEngine({ logger: env.logger });
// }

// export const searchPlugin = createBackendPlugin({
//     pluginId: 'search',
//     register(env) {
//       env.registerInit({
//         deps: {
//           config: coreServices.config,
//           logger: coreServices.logger,
//           permissions: coreServices.permissions,
//           httpRouter: coreServices.httpRouter,
//           indexBuilder: searchServices.indexBuilder
//         },
//         async init({ config, logger, permissions, httpRouter }) {

//           cont searchEngine = await createSearchEngine(env)
//           const indexBuilder = new SearchSearchIndexBuilderExtensionPoint();

//           env.registerExtensionPoint(
//             searchEngineExtensionPoint,
//             extensionPoint,
//           );
//
//           const { scheduler } = await indexBuilder.build();
//           scheduler.start();

//           const search = createSearchRouter({
//              config,
//              logger,
//              permissions,
//              engine: searchEngine.getSearchEngine(),
//              types: indexBuilder.getDocumentTypes(),
//           });
//         },
//       });
//     },
//   }),
// );

// async init({ search }) {
//          search.registerSearchEngine()
//          search.addCollator(...)
//          search.addCollator(...)
//          search.addDecorator(...)
//         },
