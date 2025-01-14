// Copyright 2024 Golem Cloud
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
    GetWorkers,
    awaitPromise as awaitPromiseImpl,
    completePromise as completePromiseImpl,
    createPromise as createPromiseImpl,
    deletePromise as deletePromiseImpl,
    generateIdempotencyKey as generateIdempotencyKeyImpl,
    getIdempotenceMode as getIdempotenceModeImpl,
    getOplogIndex as getOplogIndexImpl,
    getOplogPersistenceLevel as getOplogPersistenceLevelImpl,
    getRetryPolicy as getRetryPolicyImpl,
    getSelfUri as getSelfUriImpl,
    markBeginOperation as markBeginOperationImpl,
    markEndOperation as markEndOperationImpl,
    oplogCommit as oplogCommitImpl,
    setIdempotenceMode as setIdempotenceModeImpl,
    setOplogIndex as setOplogIndexImpl,
    setOplogPersistenceLevel as setOplogPersistenceLevelImpl,
    setRetryPolicy as setRetryPolicyImpl,
    updateWorker as updateWorkerImpl,
} from "golem:api/host@1.1.0";

export { GetWorkers };

export function createPromise() {
    return createPromiseImpl();
}

export function awaitPromise(promiseId) {
    return awaitPromiseImpl(promiseId);
}

export function completePromise(promiseId, data) {
    return completePromiseImpl(promiseId, data);
}

export function deletePromise(promiseId) {
    return deletePromiseImpl(promiseId);
}

export function getSelfUri(functionName) {
    return getSelfUriImpl(functionName);
}

export function getOplogIndex() {
    return getOplogIndexImpl();
}

export function setOplogIndex(oplogIdx) {
    return setOplogIndexImpl(oplogIdx);
}

export function oplogCommit(replicas) {
    return oplogCommitImpl(replicas);
}

export function markBeginOperation() {
    return markBeginOperationImpl();
}

export function markEndOperation(begin) {
    return markEndOperationImpl(begin);
}

export function getRetryPolicy() {
    return getRetryPolicyImpl();
}

export function setRetryPolicy(newRetryPolicy) {
    return setRetryPolicyImpl(newRetryPolicy);
}

export function getOplogPersistenceLevel() {
    return getOplogPersistenceLevelImpl();
}

export function setOplogPersistenceLevel(newPersistenceLevel) {
    return setOplogPersistenceLevelImpl(newPersistenceLevel);
}

export function getIdempotenceMode() {
    return getIdempotenceModeImpl();
}

export function setIdempotenceMode(idempotent) {
    return setIdempotenceModeImpl(idempotent);
}

export function generateIdempotencyKey() {
    return generateIdempotencyKeyImpl();
}

export function updateWorker(workerId, targetVersion, mode) {
    return updateWorkerImpl(workerId, targetVersion, mode);
}
