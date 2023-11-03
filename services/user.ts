import api from "@/app/axios";
import {
  AccountStatutoryType,
  HarvestType,
  MemberListType,
  MembersListType,
  MembersPercentageType,
  MembersStaticsType,
  Memebers,
  PaymentType,
  RegistrationFeeType,
  SeedToMemberType,
  SeedType,
  ServiceChargeType,
  SocialMediasType,
  StaticsGiftsType,
  TransactionsType,
} from "@/types";

export async function fetchMyMember(): Promise<MemberListType[]> {
  return api
    .get("/get-member-list")
    .then((res) => {
      return res?.data?.first_tier_members;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchPaymentMethods(): Promise<PaymentType[]> {
  return api
    .get("/payment-types")
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      return err;
    });
}

export async function fetchAdminInfo(): Promise<any> {
  return api
    .get("/get-admin")
    .then((res) => {
      return res.data;
      console.log(res.data);
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchRegistrationFees(): Promise<RegistrationFeeType> {
  return api
    .get("/registeration-fees")
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      return err.message;
    });
}
export async function fetchServiceCharges(): Promise<ServiceChargeType> {
  return api
    .get("/service-charges")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchSeeds(): Promise<SeedType> {
  return api
    .get(`/seeds`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchHarvests(): Promise<HarvestType> {
  return api
    .get("/harvests")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchMembers(): Promise<Memebers> {
  return api
    .get("/members")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}
export async function fetchSocialMedias(): Promise<SocialMediasType[]> {
  return api
    .get("/social-medias")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchMyMembersList(): Promise<MembersListType> {
  return api
    .get("/get-member-list")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchSeedToMember(): Promise<SeedToMemberType> {
  return api
    .get("/seed-to-member")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchMembersInPercent(): Promise<MembersPercentageType> {
  return api
    .get("stastics/members-in-percent")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchLatestTransactions(): Promise<TransactionsType> {
  return api
    .get("/transactions")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      err.message;
    });
}

export async function fetchGifts(): Promise<StaticsGiftsType> {
  return api
    .get("/stastics/gifts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchAccountStatutoryReport(): Promise<AccountStatutoryType> {
  return api
    .get("stastics/account-statutory-report")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export async function fetchStaticMembers(): Promise<MembersStaticsType> {
  return api
    .get("/stastics/members")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}
