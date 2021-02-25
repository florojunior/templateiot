import * as cpf from '@fnando/cpf';

export const fieldRules = {
  required: (v) => !!v || 'Este campo precisa ser informado.',
};

export const cnhRules = {
  required: (v) => !!v || 'O campo CNH precisa ser informado.',
};

export const nameRules = {
  required: (v) => !!v || 'O campo nome precisa ser informado.',
};

export const birthdateRules = {
  required: (v) => !!v || 'O campo data de nascimento precisa ser informado.',
};

export const emailRules = {
  required: (v) => !!v || 'O campo e-mail precisa ser informado.',
  validEmail: (v) =>
    /.+@.+\..+/.test(v) || 'O endereço de e-mail informado é inválido.',
};

export const passwordRules = {
  required: (v) => !!v || 'O campo senha precisa ser informado.',
  min: (v) =>
    (v && v.length >= 8) || 'Tamanho mínimo da senha é de 8 caracteres.',
};

export const passwordConfirmRules = {
  required: (v) =>
    !!v || 'O campo de confirmação de senha precisa ser informado.',
  matchPassword(password) {
    return (v) => v === password || 'Senhas não correspondem.';
  },
};

export const cpfRules = {
  required: (v) => !!v || 'O campo CPF precisa ser informado.',
  validCpf: (v) => cpf.isValid(v) || 'O CPF informado é inválido.',
};

export const radioGroupRules = {
  required: (v) => !!v || 'Uma opção deve ser selecionada.',
};

export const telephoneRules = {
  required: (v) => !!v || 'O campo telefone precisa ser informado.',
};
