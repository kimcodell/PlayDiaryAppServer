export class SignupRequestDto {
  nickname: string;
  email: string;
  password?: string;
  registerType: 1 | 2;
}
