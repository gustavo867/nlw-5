import 'package:DevQuiz/challenge/controllers/challenge_controller.dart';
import 'package:DevQuiz/challenge/widgets/next_button_widget.dart';
import 'package:DevQuiz/challenge/widgets/question_indicator.dart';
import 'package:DevQuiz/challenge/widgets/quiz_widget.dart';
import 'package:DevQuiz/shared/models/question_model.dart';
import 'package:flutter/material.dart';

class ChallengePage extends StatefulWidget {
  final List<QuestionModel> questions;
  ChallengePage({Key? key, required this.questions}) : super(key: key);

  @override
  _ChallengePageState createState() => _ChallengePageState();
}

class _ChallengePageState extends State<ChallengePage> {
  final controller = ChallengeController();
  final pageController = PageController();

  @override
  void initState() {
    // TODO: implement initState
    pageController.addListener(() {
      controller.currentPage = pageController.page!.toInt() + 1;
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;

    void nextPage() {
      if (controller.currentPage < widget.questions.length)
      pageController.nextPage(
          duration: Duration(milliseconds: 200), curve: Curves.easeInQuad);
    }

    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60),
        child: SafeArea(
          top: true,
          child: ValueListenableBuilder<int>(
            valueListenable: controller.currentPageNotifier,
            builder: (context, value, _) => QuestionIndicatorWidget(
              currentPage: value,
              length: widget.questions.length,
            ),
          ),
        ),
      ),
      body: PageView(
          physics: NeverScrollableScrollPhysics(),
          controller: pageController,
          children: widget.questions
              .map((item) => QuizWidget(
                    question: item,
                    onChange: nextPage,
                  ))
              .toList()),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: SafeArea(
          bottom: true,
          child: ValueListenableBuilder<int>(
              valueListenable: controller.currentPageNotifier,
              builder: (context, value, _) => Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                       if (value != widget.questions.length)
                      Container(
                          width: value == widget.questions.length
                              ? width * 0.45
                              : width * 0.9,
                          child: NextButtonWidget.white(
                            label: "Pular",
                            onTap: nextPage,
                          )),
                      if (value == widget.questions.length)
                        Container(
                            width: width * 0.9,
                            child: NextButtonWidget.green(
                              label: "Confirmar",
                              onTap: () {
                                Navigator.pop(context);
                              },
                            ))
                    ],
                  )),
        ),
      ),
    );
  }
}
