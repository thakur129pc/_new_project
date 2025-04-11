export interface LoginResponse {
  body: {
    response: {
      AuthenticationResult: {
        AccessToken: string;
        ExpiresIn: number;
        IdToken: string;
        RefreshToken: string;
        TokenType: string;
      };
      ChallengeName: string;
      ChallengeParameters: {
        USER_ID_FOR_SRP: string;
        requiredAttributes: string;
        userAttributes: string;
      };
    };
  };
  success: boolean;
}
