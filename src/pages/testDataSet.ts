import { Article } from "../types/ArticleTypes"

const TestDataSet: Article = {
  id: `ajslkdjlkajxcklj`,
  title: {
    original: `Obama Inaugural Speech`,
    translated: `한글로 번역된 오바마 취임 연설문 전문`,
  },
  body: {
    sections: [
      {
        id: `asdasdzxcqwweszv`,
        type: `paragraph`,
        sentences: [
          {
            id: `asdlkjzxlcjjqwlkej`,
            original: `My fellow citizens:`,
            translated: `친애하는 국민 여러분,`,
          },
        ],
      },
      {
        id: `asdzxcn-mnlkq3je`,
        type: `paragraph`,
        sentences: [
          {
            id: `1kajdlskjlzkcj`,
            original: `I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors.`,
            translated: `저는 우리 선조들의 희생을 기리는 마음으로, 여러분들이 제게 보내준 신뢰에 감사하는 마음으로, 그리고 우리 앞에 놓여진 책무를 겸허히 생각하는 마음으로 오늘 이 자리에 섰습니다.`,
          },
          {
            id: `2majslcdnlk`,
            original: `I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition.`,
            translated: `저는 부시 대통령이 정권 인수 과정에서 보여준 아낌없는 배려와 협력, 그리고 그가 그동안 나라를 위해 헌신하신 데 대해 감사를 드립니다.`,
          },
        ],
      },
      {
        id: `alzdcjkqpoiqwmkel`,
        type: `paragraph`,
        sentences: [
          {
            id: `1ljkkzlcx`,
            original: `Forty-four Americans have now taken the presidential oath.`,
            translated: `이제 저를 포함해 마흔 네 명의 대통령이 취임선서를 하게 된 셈입니다.`,
          },
          {
            id: `2ljkfewj`,
            original: `The words have been spoken during rising tides of prosperity and the still waters of peace. Yet, every so often the oath is taken amidst gathering clouds and raging storms.`,
            translated: `많은 선서들은 떠오르는 번영의 조류와 잔잔한 평화의 물결의 시대에 행해졌지만 때로 어떤 선서는 먹구름이 잔뜩 끼고 성난 폭풍우가 몰아치는 시대에 행해지기도 합니다. 지금까지 미국은 잘 꾸려져 왔습니다.`,
          },
          {
            id: `3poicljmkljaklsjd`,
            original: `At these moments, America has carried on not simply because of the skill or vision of those in high office, but because We the People have remained faithful to the ideals of our forbearers, and true to our founding documents.`,
            translated: `오로지 대통령과 그 참모들의 기술이나 비전 덕분이 아니라 그들을 포함한 모든 국민들 스스로가 선조들의 이상과 건국 문서들(의 이념)에 충실했었기 때문입니다.`,
          },
        ],
      },
      {
        id: `lkzxjcjqrewnnvlkj`,
        type: `paragraph`,
        sentences: [
          {
            id: `zlcopimwemwjvkkflk`,
            original: `So it has been. So it must be with this generation of Americans.`,
            translated: null,
          },
        ],
      },
      {
        id: `zxcpoinmrenlkjvn`,
        type: `paragraph`,
        sentences: [
          {
            id: `jmnmenrlkjvkjen`,
            original: `That we are in the midst of crisis is now well understood.`,
            translated: `우리 모두 현재 위기의 한가운데 있다는 사실을 잘 알고 있습니다.`,
          },
          {
            id: `irjkncvmnwkjen`,
            original: `Our nation is at war, against a far-reaching network of violence and hatred.`,
            translated: ``,
          },
          {
            id: `ernjmvnkejrmnmxc`,
            original: `Our economy is badly weakened, a consequence of greed and irresponsibility on the part of some, but also our collective failure to make hard choices and prepare the nation for a new age.`,
            translated: ``,
          },
          {
            id: `oifcnmwnekjkjd`,
            original: `Homes have been lost; jobs shed; businesses shuttered. Our health care is too costly; our schools fail too many; and each day brings further evidence that the ways we use energy strengthen our adversaries and threaten our planet.`,
            translated: `(가족은) 집을 잃고 (근로자는) 직장에서 해고당하고 기업들은 문을 닫았습니다. 의료 비용은 너무나 비싸고, 학교들은 너무 많이 실패하고, 우리가 힘을 사용하는 (그릇된) 방식이 우리의 적들을 강화시키고 (동시에) 전세계를 위협하고 있다는 더 많은 증거들이 매일같이 속속 드러나고 있습니다.`,
          },
        ],
      },
    ],
  },
}

export { TestDataSet }
