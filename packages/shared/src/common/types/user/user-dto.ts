type UserDto = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type UserAddressDto = {
  country?: string;
  region?: string;
  city?: string;
  zip?: string;
  novaPoshtaRef?: string;
};

type UserSocialMediaDto = {
  instagram?: string;
  linkedin?: string;
  facebook?: string;
};

export type { UserDto, UserAddressDto, UserSocialMediaDto };
