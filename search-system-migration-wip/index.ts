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

// import { createBackend } from '@backstage/backend-defaults';
// import { searchPlugin } from '@backstage/plugin-search-backend';

// // one of the following
// import { searchModuleElasticsearchSearchEngine } from '@backstage/plugin-search-backend-module-elasticsearch';
// import { searchModuleLunrSearchEngine } from '@backstage/plugin-search-backend-module-lunr';
// import { searchModulePgSearchEngine } from '@backstage/plugin-search-backend-module-pg';

// const backend = createBackend();

// export const searchCollators = createBackendModule({
//   pluginId: 'search',
//   moduleId: 'search.collators',
//   services: [indexBuilderService]
//   register(env) {
//     env.registerInit({
//       deps: {
//         indexBuilder: indexBuilderExtensionPoint,
//       },
//       async init({ indexBuilder }) {
//         indexBuilder.addCollator(DefaultCatalogCollator());
//       },
//     });
//   },
// });

// backend.add(searchPlugin());
// backend.start();

// configSearchModules(backend)

// // backend.add(elasticSearchSearchEngine({customTranslator, customIndexTemplate));
// // backend.add(searchCollators());
