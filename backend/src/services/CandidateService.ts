import Candidate, { CandidateQuery, CandidateStore } from '../types/candidates';

interface CandidateServiceConstructor {
  store: CandidateStore;
}

export default class CandidateService {
  private store: CandidateStore;

  constructor({ store }: CandidateServiceConstructor) {
    this.store = store;
  }

  async list({
    city,
    technology,
    minExperience,
    maxExperience,
    limit,
  }: CandidateQuery): Promise<Candidate[]> {
    return this.store.list({
      city,
      technology,
      minExperience,
      maxExperience,
      limit,
    });
  }

  async findMatches(): Promise<Candidate[]> {
    const candidates = await this.store.list({});

    const candidatesWithScore = candidates.map((candidate) => ({
      candidate,
      score: this.getScore(candidate),
    }));
    candidatesWithScore.sort();

    return [];
  }

  getScore({}): number {
    return 0;
  }
}
