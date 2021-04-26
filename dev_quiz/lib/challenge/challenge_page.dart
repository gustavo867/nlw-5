import 'package:DevQuiz/challenge/challenge_controller.dart';
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
  
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }
  
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60),
        child: SafeArea(top: true, child: QuestionIndicatorWidget(
          currentPage: controller.currentPage,
          length: widget.questions.length,
        )),
      ),
      body: PageView(
        children: widget.questions.map((item) => QuizWidget(question:  item)).toList()
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: SafeArea(
          bottom: true,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Container(
                  width: width * 0.45,
                  child: NextButtonWidget.white(
                    label: "Pular",
                    onTap: () {},
                  )),
              Container(
                  width: width * 0.45,
                  child: NextButtonWidget.green(
                    label: "Confirmar",
                    onTap: () {},
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
