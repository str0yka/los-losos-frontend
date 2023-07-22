import { API_URL } from "@/utils";

export class appFetch {
  static async fetchData(
    method: "POST" | "GET" | "PATCH" | "PUT" | "DELETE",
    url: string,
    init?: RequestInit
  ) {
    const data = await fetch(API_URL + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      body: JSON.stringify(init?.body),
    });
    return data.json();
  }

  static async get(url: string, init?: any) {
    return await this.fetchData("GET", url, init);
  }

  static async post(url: string, init?: any) {
    return await this.fetchData("POST", url, init);
  }

  static async delete(url: string, init?: any) {
    return await this.fetchData("DELETE", url, init);
  }
}
