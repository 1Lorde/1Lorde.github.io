export const Roles = {
  'app-owner': 'App Owner',
  'product-technical': 'Product & Technical',
  'marketing-finance': 'Marketing & Finance',
  'koperasi-owner': 'Koperasi Owner',
  'credit-analyst': 'Credit Analyst',
  'account-officer': 'Account Officer',
}

export const KoperasiRoles = {
  'koperasi-owner': 'Koperasi Owner',
  'credit-analyst': 'Credit Analyst',
  'account-officer': 'Account Officer',
}

export const AdminRoles = {
  'app-owner': 'App Owner',
  'product-technical': 'Product & Technical',
  'marketing-finance': 'Marketing & Finance',
}

export function allRoles() {
  return Object.keys(Roles).map(function (key) {
    return Roles[key]
  })
}

export function adminRoles() {
  return Object.keys(AdminRoles).map(function (key) {
    return Roles[key]
  })
}

export function koperasiRoles() {
  return Object.keys(KoperasiRoles).map(function (key) {
    return Roles[key]
  })
}
