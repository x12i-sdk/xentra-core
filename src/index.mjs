import assert from 'node:assert/strict';
import { createAccountModel, createMembershipModel, createDefaultRoles, resolveActiveAccount } from '@x12i/xentra-core';

const now = '2026-01-01T00:00:00.000Z';
const account = createAccountModel({ id: 'demo-account', name: 'Demo', slug: 'demo', now });
const roles = createDefaultRoles(account.id, now);
assert(roles.length > 0);
const membership = createMembershipModel({ id: 'demo-member', accountId: account.id, userId: 'demo-user', roleIds: [roles[0].id], now });
assert.equal(resolveActiveAccount([account], account.id).id, account.id);
assert.equal(membership.accountId, account.id);
console.log({ account, membership, roleKeys: roles.map(role => role.key) });
